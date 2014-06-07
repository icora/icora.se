(function(document) {

  // Helper function to emulate an insertAfter DOM function
  function insertAfter(referenceNode, newNode) {
    return referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  // We'll need our project previews
  var projectPreviews = document.querySelectorAll(".project-preview");

  // Abort if the page has no project previews
  if (projectPreviews.length === 0 ) return;


  /**
   * Embed project preview images with JavaScript for a faster website experience.
   */

  for (var i = projectPreviews.length - 1; i >= 0; i--) {
    var placeholder    = projectPreviews[i].querySelector(".project-preview-image");
    var generatedImage = document.createElement("img");

    generatedImage.className = placeholder.className;
    generatedImage.src       = placeholder.getAttribute("data-src");
    generatedImage.height    = placeholder.getAttribute("data-height");
    generatedImage.width     = placeholder.getAttribute("data-width");

    insertAfter(placeholder, generatedImage);
  }


  /**
   * Hover images for project previews.
   */

  // Let's try and only include these images on desktop devices
  if (matchMedia('only screen and (min-width: 680px)').matches) {

    // Go through each project preview and append a duplicated image with the "on"-state
    for (var i = projectPreviews.length - 1; i >= 0; i--) {
      var originalImage  = projectPreviews[i].querySelector("img");
      var duplicateImage = originalImage.cloneNode();

      duplicateImage.className = "project-preview-duplicate-image";
      duplicateImage.src = originalImage.src.replace(/_off/, "_on");
      insertAfter(originalImage, duplicateImage);
    }

  }

})(document);
