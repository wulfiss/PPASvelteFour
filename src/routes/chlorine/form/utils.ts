export async function handleFormSubmition(formData, fn) {
    try{
        const response = await fetch('.',{
            method: 'POST',
            body: formData
        });

        if(response.ok){
            const result = await response.json();

            if(result.success){
                fn();
                alert('Form submitted successfully');
            }else {
                if(result.duplicateEntry){
                    alert('Duplicate entry');
                }else if(result.missingFields){
                    alert('Missing fields');
                }else{
                    alert('Internal server error'+ result.dbError);
                }
            }
        }else{
            const errorData = await response.json();
            alert('Error: '+ errorData.error);
        }
    }catch(e){
        console.error('Network error: ', e);
    }
}