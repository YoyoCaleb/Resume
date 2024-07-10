import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Header from "../components/Header";
import mountains from "../photos/mountains.png";

export default function Home() {
  return (
    <div>
      {/* <Header />
      <h2>Home Page</h2> */}
      <div>
        <Parallax pages={3}>
          <ParallaxLayer
            offset={0}
            speed={2}
            factor={1}
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/8137081/pexels-photo-8137081.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
              backgroundSize: "cover",
            }}
          >
            <h3 class="text-light">Page 1</h3>
            <p class="text-light">Welcome to the first page!</p>
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.3}
            speed={2.5}
            factor={1}
            style={{
              backgroundImage: `url('${mountains}')`,
              backgroundSize: "cover",
              zIndex: 1,
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            offset={0}
            speed={1}
            factor={3}
            style={{
              backgroundColor: "#131321",
              zIndex: -1,
            }}
          >
            <h3 class="text-light">Page 2</h3>
            <p class="text-light">This is the second page.</p>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}
