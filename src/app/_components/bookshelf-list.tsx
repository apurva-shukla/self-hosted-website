type BookshelfListProps = {
  items: Array<{
    title: string;
    category: string;
    date: string;
  }>;
};

const BookshelfList = ({ items }: BookshelfListProps) => {
  return (
    <section className="relative w-full bg-hero-bg px-[128px] py-[167px]">
      <h1 className="text-[48px] font-jjannon font-[450] leading-[58px] text-primary/10 mb-[48px]">
        bookshelf
      </h1>
      
      <div className="flex flex-col w-[1256px] gap-[30px]">
        {items.map((item, index) => (
          <div 
            key={index}
            className="flex flex-row items-center gap-[20px] h-[58px]"
          >
            <div className="w-[746px]">
              <h2 className="text-[24px] font-jjannon font-[450] leading-[29px] text-primary-light">
                {item.title}
              </h2>
            </div>
            
            <div className="w-[235px] flex justify-center">
              <span className="text-[24px] font-jjannon font-[450] leading-[29px] text-primary-light text-center">
                {item.category}
              </span>
            </div>
            
            <div className="w-[235px] flex justify-center">
              <span className="text-[24px] font-jjannon font-[450] leading-[29px] text-primary-light text-center">
                {item.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookshelfList;