export const resolvers = {
    Book:{
            author: ()=>{
                
            }
    },
    Query: {
        books:()=>{
            return [{
                id:1,
                name: 'Book - 1'
            },
        
            {
                id:2,
                name: 'Book - 2'
            }]
        },
    
        authors:()=>{
            return [{
                id:1,
                name: 'Rishabh'
            },
            {
                id:2,
                name: 'Avi'
            }]
        }
    }
}