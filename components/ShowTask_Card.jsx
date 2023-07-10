import { Card, Grid, Text, Button, Row } from '@nextui-org/react'

const ShowTask_Card = ({title,body,schedule,date}) => {
    return (
        <Card css={{ mw: '300px' }}>
            <Card.Header>
                <Text b>{title}</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: '$10' }}>
                <Text>{body}</Text>
                <Text>{date}</Text>
            </Card.Body>
            <Card.Divider />
            <Text>{schedule}</Text>
            <Card.Divider />
            <Card.Footer>
                <Row justify="flex-end">
                    <Button size="sm" light>
                        Cancel
                    </Button>
                    <Button size="sm">Agree</Button>
                </Row>
            </Card.Footer>
        </Card>
    )
}
export default ShowTask_Card
