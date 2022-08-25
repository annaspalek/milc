import {Badge} from 'react-bootstrap';

const TagButton = ({tags}) => {
    const tagElements = tags.split(',').map(function(item) {
        return (
            <Badge pill bg="dark" className='tagBadge'>{item}</Badge>
        )
    });


    return (
        <div className='tags'>{tagElements}</div> 
    )
}

export default TagButton;