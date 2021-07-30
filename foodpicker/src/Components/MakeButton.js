import {Button} from 'reactstrap';

const MakeButton = ({handleClick}) => {
    return (
        <Button color="info" onClick={() => handleClick()}>
            Get Inspired
        </Button>
    );
}

export default MakeButton;