import Banner from '@/components/Banner';
import FeaturedBooks from '@/components/FeaturedBooks';
import NewBooks from '@/components/NewBooks';
import ShortList from '@/components/ShortList';
import Story from '@/components/Story';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Banner />
      <NewBooks />
      <FeaturedBooks />
      <ShortList />
      <Story />
    </div>
  );
}
