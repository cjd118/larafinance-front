import Button from '@components/Button';
import { Trash } from 'lucide-react';

export default function DeleteButton() {
    return (
      <div>
        <Button className="bg-red-700 flex flex-row items-center">
            <Trash className="mr-1" size={18} />
            <div className="flex-1">Delete</div>
        </Button>
      </div>
    );
}