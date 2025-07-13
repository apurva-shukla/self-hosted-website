type ContentFrameProps = {
  title: string;
  content: string;
  headingLevel?: 'h1' | 'h2' | 'h3';
};

const ContentFrame = ({ 
  title, 
  content, 
  headingLevel = 'h1' 
}: ContentFrameProps) => {
  let headingClass = '';
  
  switch (headingLevel) {
    case 'h1':
      headingClass = 'text-[40px] font-[450] leading-[48px]';
      break;
    case 'h2':
      headingClass = 'text-[30px] font-[450] leading-[36px]';
      break;
    case 'h3':
      headingClass = 'text-[25px] font-[450] leading-[30px]';
      break;
    default:
      headingClass = 'text-[40px] font-[450] leading-[48px]';
  }
  
  return (
    <section className="relative box-border w-full border border-black bg-hero-bg px-[128px] py-[167px]">
      <h1 className="text-[48px] font-jjannon font-[450] leading-[58px] text-primary/10 mb-[48px]">
        post
      </h1>
      
      <div className="flex flex-col items-start w-[1001px]">
        {headingLevel === 'h1' && (
          <h1 className={`w-full h-[80px] font-jjannon ${headingClass} text-black mb-[20px]`}>
            {title}
          </h1>
        )}
        
        {headingLevel === 'h2' && (
          <h2 className={`w-full h-[80px] font-jjannon ${headingClass} text-black mb-[20px]`}>
            {title}
          </h2>
        )}
        
        {headingLevel === 'h3' && (
          <h3 className={`w-full h-[80px] font-jjannon ${headingClass} text-black mb-[20px]`}>
            {title}
          </h3>
        )}
        
        <div className="w-full">
          <p className="text-[20px] font-jjannon font-[450] leading-[40px] text-black">
            {content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentFrame;