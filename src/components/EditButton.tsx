import LinkButton, {LinkButtonProps} from '@components/LinkButton';

export default function EditButton(props: LinkButtonProps) {
    return (
      <div>
        <LinkButton {...props} className={props.className ?? ''}>
            Edit
        </LinkButton>
      </div>
    );
}