
 export function createConnection(room,server)
{

    return{
        connect()
        {
            console.log('Connected to ' + room + 'at ' + server );
        },
        disconnect()
        {
            console.log('Disconnected to ' + room + 'at ' + server );
        }
    }
}