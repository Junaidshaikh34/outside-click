$(document).on("click", function(e) {
      var container = $(".toggle-btn, .drawer");
      console.log("container", container);
      if (
        !container.is(e.target) && // if the target of the click isn't the container...
        container.has(e.target).length === 0 // ... nor a descendant of the container
      ) {
        $body.removeClass("drawer-overlay");
        $(".drawer").removeClass("active");
      }
    });
