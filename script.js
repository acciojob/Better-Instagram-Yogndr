//your code here
// document.getElementsByClassName("image").addEventListener("dragstart",(e)=>{
	
// });
// document.getElementsByClassName("image").addEventListener("dragover",(e)=>{
// 	e.preventdefault()
// });
// document.getElementsByClassName("image").addEventListener("drop",(e)=>{
	
// });


const images = document.getElementsByClassName("image");
Array.from(images).forEach(image => {
  // When dragging starts
  image.addEventListener("dragstart", (e) => {
    // Store the id of the dragged element in a custom data attribute
    e.dataTransfer.setData("text", e.target.id);
    e.target.classList.add("selected"); // Add a 'selected' class to indicate the image being dragged
  });
	image.addEventListener("dragend", (e) => {
    e.target.classList.remove("selected"); // Remove the 'selected' class after the drag ends
  });
	 image.addEventListener("dragover", (e) => {
    e.preventDefault(); // Allow the drop by preventing the default action
  });

  // When a drop occurs, swap the dragged element with the target element
  image.addEventListener("drop", (e) => {
    e.preventDefault();

	  const draggedId = e.dataTransfer.getData("text");

    // Get the dragged element and the target element (where the item is dropped)
    const draggedElement = document.getElementById(draggedId);
    const targetElement = e.target;
if (draggedElement !== targetElement) {
      // Clone the dragged element and the target element
      const draggedClone = draggedElement.cloneNode(true);
      const targetClone = targetElement.cloneNode(true);

      // Replace the content of the dragged and target elements with their clones
      draggedElement.replaceWith(targetClone);
      targetElement.replaceWith(draggedClone);
    }
  });
});
