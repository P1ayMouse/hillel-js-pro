import { useContext } from "react";

import "./AboutMe.css";

import { ThemeContext } from "../../context/ThemeContext";

export default function AboutMe() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`aboutMeContainer aboutMeContainer-${theme}`}>
            <h1>About Me</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                volutpat dui a dolor consectetur tincidunt. Sed malesuada nisi nec
                purus euismod, nec tempus justo efficitur.
            </p>
            <p>
                Aenean convallis urna non nulla tristique, id congue sapien dictum.
                Donec varius, risus non laoreet interdum, ligula elit ultricies quam,
                a egestas mauris nulla at magna.
            </p>
            <p>
                Proin eget ante vitae ex sagittis dictum non vel velit. Praesent eget
                enim vitae mauris bibendum laoreet nec a eros.
            </p>
        </div>
    );
}
