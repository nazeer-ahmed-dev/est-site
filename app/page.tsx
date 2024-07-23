import Banner from './components/Banner/Banner';
import Companies from './components/Companies/Companies';
import Tabs from './components/Courses/Courses';
import Mentor from './components/Mentor/Mentor';
import Students from './components/Students/Students';
import Newsletter from './components/Newsletter/Newsletter';
import Members from './components/Members/members';
import Gallery from './components/Gallery/gallery';

export default function Home() {
  return (
    <main>
      <Banner />
      {/* <Companies /> */}
      <Tabs />
      <Members/>
      <Gallery/>
      {/* <Mentor /> */}
      <Students />
      <Newsletter />
    </main>
  )
}
