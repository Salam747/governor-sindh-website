
import AdvanceCourses from "./componenets/advanceCourses";
import AdvanceCourses2 from "./componenets/advanceCourses2";
import Content from "./componenets/content";
import Courses from "./componenets/courses";
import Hero from "./componenets/hero";
import Navbar from "./componenets/navbar";

export default function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <Content/>
      <Courses/>
      <AdvanceCourses/>
      <AdvanceCourses2/>
    </div>
  );
}
