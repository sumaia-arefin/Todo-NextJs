import axios from 'axios'
import { Card, Grid, Text, Input, Button, Row } from '@nextui-org/react'
import { useRouter } from 'next/router'
const CreateTask_Card = () => {
    const router = useRouter();
    async function submitForm(event) {
        event.preventDefault()
        const dataset = {
            Name: event.target.Name.value,
            schedule: event.target.schedule.value,
            body: event.target.body.value,
            date: event.target.date.value,
        }
        await axios.post('api/hello', dataset).then((data) => {console.log(data); router.reload()})
        console.log(dataset)
    }
    return (
        <div className="my-[5%]">
            <Card css={{ mw: '300px' }}>
                <Card.Header>
                    <Text b>Create Task</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: '$10' }}>
                    <form onSubmit={submitForm}>
                        <Input
                            placeholder="Name"
                            name="Name"
                            className="mb-2"
                        />
                        <Input
                            placeholder="Body"
                            name="body"
                            className="mb-2"
                        />
                        <Input
                            placeholder="Schedule"
                            name="schedule"
                            className="mb-2"
                        />
                        <Input type="date" name="date" className="mb-2" />
                        <Button type="submit" color="success" className="mt-2">
                            Submit
                        </Button>
                    </form>
                </Card.Body>
                <Card.Divider />
            </Card>
        </div>
    )
}

export default CreateTask_Card
