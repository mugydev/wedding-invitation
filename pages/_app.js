import "./styles/globals.css";
import "./styles/scroll.scss";
import "tailwindcss/tailwind.css";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Lobster+Two:ital@1&family=Rouge+Script&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

      <script
        dangerouslySetInnerHTML={{
          __html: `

        function getRandomArbitrary(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        }
        
        $(document).ready(function () {
          setInterval(function () {
            var screenHeight = $(document).height();
            var screenWidth = 300;
        
            var startLeft = getRandomArbitrary(0, screenWidth);
        
            var timeRun = getRandomArbitrary(4000, 6000);
            var opacityR = Math.random() * (1 - 0.2) + 0.2;
            var sizeR = getRandomArbitrary(5, 6);
        
            var endLeft = getRandomArbitrary(startLeft - 100, startLeft + 50);
        
            var snow = document.createElement("span");
            snow.className = "heart_class";
        
            $(snow)
              .addClass("snow-item fa fa-heart")
              .css({
                position: "absolute",
                "z-index": "999",
                color: "red",
                display: "block",
                top: 0,
                left: startLeft,
                opacity: opacityR,
                "font-size": "30px",
              })
              .appendTo("body")
              .animate(
                {
                  top: screenHeight - sizeR,
                  left: endLeft,
                },
                {
                  duration: timeRun,
                  easing: "linear",
                  complete: function () {
                    $(this).fadeOut("fast", function () {
                      $(this).remove();
                    });
                  },
                }
              );
          }, 1000);
        });
        
        `,
        }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
