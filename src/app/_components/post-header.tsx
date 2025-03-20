import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date}: Props) {
  return (
    <>
      <div className="max-w-2xl mx-auto">
        <PostTitle>{title}</PostTitle>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 md:mb-16 sm:mx-0" style={{ maxWidth: '15%' }}>
          {/* <CoverImage title={title} src={coverImage} /> */}
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      
      </div>
    </>
  );
}
