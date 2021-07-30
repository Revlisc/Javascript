import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
//import { Link } from 'react-router';

const Recipe = ({recipeChoice}) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>Unsure of what to cook? Get tonight's inspiration below!</CardTitle>
                    <CardText>
                        <p>{recipeChoice.title}</p>
                        <a href={recipeChoice.url}>Get the recipe here</a>
                    </CardText>
                </CardBody>            
            </Card>
        </div>
    );
}

export default Recipe;