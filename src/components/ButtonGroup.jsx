
const Tag = ({name, quantity}) => {
    return (
        <button type="button" className="text-sm btn-tags rounded-full py-1 px-2"> 
        {name}  <span className="bg-gray-300 rounded-full px-1.5 text-xs ">{quantity}</span> 
        
        </button>
    )
}



const ButtonGroup = ({cateTags, type = "tags"}) => {
    
    const renderButtonOfGroup = (name, quantity, id) => {
        if(type === "tags")
            return(
                <Tag name={name} quantity={quantity} key={id}/>
            )
    }

    return (
        <div class="inline-flex rounded-md  items-center content-center gap-4" role="group">
            {/* <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"> */}
                 {cateTags &&  cateTags.map(t => renderButtonOfGroup(t.name, t.quantity, t.id))}
            {/* </button> */}
            {/* <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Settings
            </button>
            <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Messages
            </button> */}
        </div>
    )
}

export default ButtonGroup