import MainHeader from '@layouts/MainHeader';
import Button from '@components/Button'

export default function CategoriesEditPage() {

  return (
    <div>
      <MainHeader title="Edit category"></MainHeader>
      <form className="flex flex-col p-4 max-w-2xl">
        <div className="mb-4">
          <label className="mt-2 pl-1 text-sm font-medium leading-none">Category Name</label>
          <input className="my-2 h-9 w-full rounded-md border border-gray-200 border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" name="name" placeholder="Category Name" />
        </div>
        <div className="mb-4">
          <label className="mt-2 pl-1 text-sm font-medium leading-none">Category Name</label>
          <input className="my-2 h-9 w-full rounded-md border border-gray-200 border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" name="name" placeholder="Category Name" />
        </div>
        <Button>Save</Button>
      </form>
    </div>
  );
}