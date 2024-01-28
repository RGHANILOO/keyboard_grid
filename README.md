# keyboard_grid
a key boaad componenet built in css grid


building key board component in css grid to use as akeyboard in my upcoming game as a form of practicing css grid 


tranform-origin
calc
css variables --property-
kbd
cal  and the negative values on variable -1* var(--blah-blah)


#### event.target:

    This property refers to the element that actually triggered the event. For example, if you have a click event listener attached to a parent <div> element, and you click on a child <span> element within that <div>, event.target will refer to the <span> element, which is the actual target of the click event.
    This property is useful when you want to know exactly which element triggered the event, especially in cases where events bubble up through the DOM hierarchy.


#### event.currentTarget:

    This property refers to the element that the event handler is currently attached to. It does not change as the event bubbles up or down the DOM hierarchy. It always refers to the element to which the event listener was initially attached.
    Unlike event.target, which may vary depending on where the event originated, event.currentTarget remains constant throughout the event handling process.
    This property is useful when you want to refer to the specific element to which the event listener is attached, regardless of where the event originated within its descendants.