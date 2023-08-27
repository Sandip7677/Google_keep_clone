import React from 'react'
import { Card, CardContent } from './card'

const NoteItem = ({ value }: any) => {
    return (
        <>
            <Card className="min-width-card min-height-card hover:shadow-lg">
                <CardContent className='text-lg'>
                    {value.note}
                </CardContent>
                {value.reminder_time && <div className="p-1 border rounded m-10">
                    {value.reminder_time.substring(11, 19)}
                </div>}


            </Card>
        </>
    )
}

export default NoteItem