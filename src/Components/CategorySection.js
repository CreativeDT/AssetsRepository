import CategoryItem from './CategoryItem';

const CategorySection = ({ items, categoryName ,openVideoModal}) => {
  if (!items) return <div>Loading...</div>;

  if (items.length === 0) {
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {categoryName}
        </h2>
        <p className="text-gray-600">No items found in this category</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        {categoryName}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <CategoryItem
            key={index}
            title={item.title}
            icon={item.icon}
            categoryName={item.category}
            description={item.description}
            // viewLink={item.viewLink}
            pitchDeckLink={item.pitchDeckLink}
            documentationLink={item.documentationLink}
            demoVideoLink={item.demoVideoLink}
            iconColor={item.iconColor}
          
            // openVideoModal={openVideoModal}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;