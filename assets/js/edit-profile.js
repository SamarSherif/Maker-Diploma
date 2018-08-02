 $(function()
    {
        $('#fileUpload').on('change',function ()
        {
            var filePath = $(this).val();
            console.log(filePath);
        });
    });
