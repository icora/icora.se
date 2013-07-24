(function(document) {

  /**
   * Hover images for project previews.
   */

  // Let's try and only include these images on desktop devices
  if (matchMedia('only screen and (min-width: 680px)').matches) {

    var projectPreviews = document.querySelectorAll(".project-preview");

    // Abort if the page has no project previews
    if (projectPreviews.length === 0 ) return;

    // Helper function to emulate an insertAfter DOM function
    function insertAfter(referenceNode, newNode) {
      return referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    // Go through each project preview and append a duplicated image with the "on"-state
    for (var i = projectPreviews.length - 1; i >= 0; i--) {
      var originalImage  = projectPreviews[i].querySelector("img");
      var duplicateImage = originalImage.cloneNode();

      duplicateImage.className = "project-preview-duplicate-image";
      duplicateImage.src = originalImage.src.replace(/_off/, "_on");
      insertAfter(originalImage, duplicateImage);
    };

  }

})(document);