import Button, {ButtonProps} from '@components/Button';

export default function DeleteButton(props: ButtonProps) {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const confirmed = window.confirm("Are you sure you want to delete this?");
        if (!confirmed) {
          e.preventDefault(); // stop any default behavior if not confirmed
          return;
        }
    
        // Call the original onClick handler if it exists
        console.log("DeleteButton clicked");
        props.onClick?.(e);
      };

    return (
      <div>
        <Button className="bg-red-700 hover:bg-red-900 flex flex-row items-center" onClick={handleClick}>
            Delete
        </Button>
      </div>
    );
}