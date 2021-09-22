
$(document).ready(function () {
// manage section
    
$('#manage_search_type').on('change',function (){
        var Search_type= $(this).val();
        
        switch(Search_type) {
            case "0":
                
                $('.search_dropdowne').hide();
                $('.search_textbox').hide();
                break;
            case "1":
                
                $('.search_dropdowne').hide();
                $('.search_textbox').show();
                PlaceHolder = "Enter Email";
                break;
            case "2":
                
                $('.search_dropdowne').hide();
                $('.search_textbox').show();
                PlaceHolder = "Enter GeoName";
                break;
            case "3":
                
                 $('.search_dropdowne').hide();
                $('.search_textbox').show();
                PlaceHolder = "Enter Transaction ID";
                break;
            case "4":
                
                $('.search_dropdowne').show();
                $('.search_textbox').show();
                PlaceHolder = "Select Country & enter Phone Number";
                break;    
        }
        $('#search_type_input').val('');
        
         $('#search_type_input').attr("placeholder", PlaceHolder);
        
        
});
    $("#search_type_input").keydown(function(event) {
        // Allow only backspace and delete
        if($('#manage_search_type').val() == 4){
                 if( !(event.keyCode == 8                                // backspace
                    || event.keyCode == 46                              // delete
                    || (event.keyCode >= 35 && event.keyCode <= 40)     // arrow keys/home/end
                    || (event.keyCode >= 48 && event.keyCode <= 57)     // numbers on keyboard
                    || (event.keyCode >= 96 && event.keyCode <= 105))   // number on keypad
                    ) {
                        event.preventDefault();     // Prevent character input
                }

        }
    });
$('.ManageSubmit').on('click',function(){
    var category ='';
    var product ='';
     var start_date='';
     var end_date='';
    
        start_date=$('#start_date').val();
        end_date=$('#end_date').val();
    
             product=$('#manage_product_list').val();
    
             category=$('#manage_category').val();
    


    var search_type = $('#manage_search_type').val();
        
    var country_code = $('#country_name').val();
    var search_type_input = $('#search_type_input').val();
    if(search_type != 0){
        if(search_type_input.trim() == ''){
             $('#search_type_input').addClass('is-invalid'); 
          return false;
        }
        else{
             $('#search_type_input').removeClass('is-invalid'); 
        }
    }
        
      if(search_type == 1){
          if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(search_type_input)){
                
                  $('#search_type_input').removeClass('is-invalid');
               
          }
          else{
                
                $('#search_type_input').addClass('is-invalid'); 
               return false;
             
          }
          
      }
       if(search_type == 4){
           if(country_code == ''){
               
                return false;
           }
       }
    
    $.ajax({
                url: "manage/getlist",
                type: 'POST',
                dataType: 'json',
                data: {search_type:search_type,country_code:country_code,search_type_input:search_type_input,product:product,category:category,start_date:start_date,end_date:end_date },
                
        }).done(function (result) {
 
                table.clear().draw();
                
                table.rows.add(result).draw();
                }).fail(function (jqXHR, textStatus, errorThrown) { 
               
            });
    
});

var table= jQuery('#table_manage').DataTable({
                    data:[],
                    columns: [
                        { data: 'email', name: 'email'},
                         { data: 'txn_id', name: 'txn_id'},
                        { data: 'geomain_name', name: 'geomain_name'},
                        { data: 'category', name: 'category'},
                        { data: 'geomain_year', name: 'geomain_year'},
                        { data: 'price', name: 'price'},
                        { data: 'api_response', name: 'api_response'},
                        { data: 'created_on', name: 'created_on'},
//                         { data: 'expiryDate', name: 'expiryDate'},
                        
                            ],
                    rowCallback: function (row, data) {},
                    filter: true,
                    "order": [],
                    "pagingType": "full_numbers",
                    "pageLength": 10,
                    info: false,
                    ordering: true,
                    processing: true,
                    retrieve: true        
                    });
});
