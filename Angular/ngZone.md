37

NgZone is a wrapper around Zone.js which is a library that creates a context around asynchronous functions in order to make them trackable.

Angular's change detection is heavily dependent on Zones, How?

Angular needs a way of understanding when's the time to run the change detection, which is basically nothing but updating the DOM to represent the latest model ( javascript ) changes.

Imagine we have bellow example :

  <div id="content"></div>
And somewhere in our javascript code, we have

const element = document.getElementById('content');

function updateText(){
     element.innerHtml = myText+ ": updated at time"+Date.now()
}
Let's say initially I'm going to update the content with a hello :

  const myText = "Hello";

  this.updateText();
This will update my HTML content to the text: "Hello updated at time 19:30"

and then let's say I want to update the myText variable to be something else after a user click :

  <button onClick="updateTheTextAgain()"></button>



  updateTheTextAgain(){

     this.myText = "Hi there";
  }
What's gonna happen if I click on that button?

Nothing;

Well, actually, it's not, "nothing", I managed to update the variable, but I did NOT update the view ( I didn't detect the changes of the model), so I need to tweak my updateTheTextAgain to be :

   updateTheTextAgain(){

     this.myText = "Hi there";
       this.updateText(); /// Making sure I'm detecting the change ( I'm updating the `DOM`)

  }
Now, clicking the button will update my view (because of the manual change detection).

This obviously is not the best idea, because then I have to write a lot of updateText functions and call them anywhere that I want the view to be updated after I update the model, right ( Go back to Angular1 and remember $scope.apply())?

Here is where ZoneJs is amazing.

Imagine if I could rewrite the onClick function, I mean the original onClick function of the browser to be :

 const originalOnClick = window.onClick;


 window.onClick = function(){
    originalOnClick();
    this. updateText();
 }
This is called monkey patching or open heart surgery of native functions.

What am I getting by this?

After I put my patched onClick in the page, all the onClick function that is going to be written in the whole application, are going to go through my patched onClick, which means, I don't have to run updateText() function anymore after every onclick, because it's baked into the click event handler itself.

In Angular, that updateText is the change detection, Angular has hooks in all the native events ( by using Zones).

So when you write :

   setTimeout(()=>{
        console.log('Do something');

   },100);
What you're actually writing is something like :

   setTimeout(()=>{
        console.log('Do something');
        runAngularsChangeDetection(); 
   },100);
Above is far away what is happening in reality, but it's the heart of the whole story of change detection and Zones and why do we need them/

** UPDATE:**

When should we use NgZone.

There would be a lot of cases when you want to use NgZone, I can name two :

1- When you want something to run outside of Angular's change detection :

Remember I said Angular has hooks in all async events? window.onScroll is one of them, now let's say we want to do some calculation when the user is scrolling, what you normally do is :

   window.onscroll = ()=>{

    // do some heavy calculation : 
  }     
Now, when scrolling, your function is being called normally as you would expect, but you might notice you're getting a bit of performance issue and that could be because Angular is running the changeDetection on every single scroll event ( expected behaviour).

If you have a lot of binding in your component, then you'll definitely notice the performance drop there on the scroll.

So one way is to say, hey Angular, ignore my onscroll event, I know what I'm doing, I don't want you to run change detection, in this case, you'd use NgZone

 constructor(private zone:NgZone){
   this.zone.runOutsideOfAngular(()=>{
      window.onscroll = ()=>{
       // do some heavy calculation : 
      }
    })
  }
This will make sure Angular won't run the change detection up on scrolling.

Another case would be the exact opposite of above, where you have a function that is somehow outside of Angular's zone and you want it to be inside, like when a third party library is doing some stuff for you and you want it to be bound to your Angular cycle.

   this.zone.run(()=>{
        $.get('someUrl').then(()=>{
           this.myViewVariable = "updated";
        })
   });
Without using Zone, you most likely need to do :

         $.get('someUrl').then(()=>{
           this.myViewVariable = "updated";
           this.changeDetectorRef.detectChanges();
        })
But note that when your function is inside the zone ( the run method ) you don't have to call the detectChanges manually yourself and angular will do the job



https://medium.com/ngconf/deep-dive-into-zone-js-part-1-execution-context-92166bbb957
