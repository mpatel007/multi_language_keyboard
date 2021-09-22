$(document).ready(function () {

    faq_list();
    
    
    $('body').on('click', '.btnDelete_faq', function () {
            if (confirm("Are you sure for delete?")) {
                var id = $(this).data('id');
                
                $.ajax({
                        url: BASE_URL+"admin/faq/delete_faq",
                        method:"POST",
                        data:{id:id},
                        success:function(data) {
                            var data = $.parseJSON(data);

                            if (data.status == 1) {
                                faq_list();
                            }
                        },	
                });
            }
            else{
                 return false;
            }
   });

    $("#show_graph").on('click',function (){
        $(".chart_revenue").show();
        $(".table_revenue").hide();
        var selectedDateValue =  $('#ddDateFilter').val();
        var selectedtype =  $('input[name=radio-choice]:checked').val();
        var start_date =  $("#txtFromDate").val();
        var end_date =  $("#txtToDate").val();
        var country = $("#country_name option:selected" ).val();
        var category = $("#category_select option:selected" ).val();
         var product_id = $("#product_name option:selected" ).val();
        $.ajax({
            type: "POST",
            url: BASE_URL+"admin/revenue/order_detail_list",
                data: {selectedDateValue: selectedDateValue,
                        start_date:start_date,
                        end_date:end_date,
                        selectedtype:selectedtype,
                        country:country,
                        category:category,product_id:product_id},
            async: true,
            dataType: "text",
            success: function (data) {
                var data = $.parseJSON(data);
                var chart_title = '';
                if(selectedtype == 'gross'){
                    chart_title = "Gross Sales";
                } else if(selectedtype == 'commission'){
                    chart_title = "Commission";
                } else if(selectedtype == 'taxes'){
                    chart_title = "Taxes";
                }
                load_chart(data.data_chart, chart_title);
            }
        });
    });

    
    
    

   $('body').on('click', '.btnDelete_user', function () {
            if (confirm("Are you sure for delete?")) {
                var id = $(this).data('id');
                
                $.ajax({
                        url: BASE_URL+"admin/admin_management/delete_user",
                        method:"POST",
                        data:{id:id},
                        success:function(data) {
                            var data = $.parseJSON(data);

                            if (data.status == 1) {
                                user_list();
                            }
                        },	
                });
            }
            else{
                 return false;
            }
   });
   
   
   
   user_list();
   function  user_list(){
    
        $('#table_user').DataTable({
            paging: true,
            pageLength: 10,
            bDestroy: true,
            responsive: true,
            processing: true,
            serverSide: true,
            "order": [[0, "desc"]],
            dataType:"json",
            ajax: {
                url: BASE_URL+"admin/admin_management/user_list",
                type: 'POST',
            },
            columns: [
//                { data: 'id'},
                {data: 'f_name'},
                {data: 'l_name'},
                {data: 'user_role'},
                {data: 'email'},
//                {data: 'password'},
                {data: 'status'},
                {data: 'action', orderable: false, searchable: false},
            ],
        });

}
   
   
var GeomainUserList=  $('#GeomainUserList').DataTable({
            paging: true,
            pageLength: 10,
            bDestroy: true,
            responsive: true,
            processing: true,
            serverSide: true,
            "order": [[0, "desc"]],
            dataType:"json",
            ajax: {
                url: BASE_URL+"admin/user_management/user_list",
                type: 'POST',
            },
            columns: [
                { data: 'customer_number'},
                {data: 'fname'},
                {data: 'lname'},
                {data:'mobile_number'},
                {data: 'email'},
//                {data: 'password'},
                {data: 'status'},
                {data: 'action', orderable: false, searchable: false},
            ],
   })
   
       

   $('body').on('click', '.btnDelete_geomainuser', function () {
            if (confirm("Are you sure for delete?")) {
                var id = $(this).data('id');
                
                $.ajax({
                        url: BASE_URL+"admin/user_management/delete_user",
                        method:"POST",
                        data:{id:id},
                        success:function(data) {
                            var data = $.parseJSON(data);

                            if (data.status == 1) {
                               GeomainUserList.ajax.reload();
                            }
                        },	
                });
            }
            else{
                 return false;
            }
   });
   
    $("#country_name").select2({
            width: '100%',
            placeholder: "Select Country",
            minimumInputLength: 2,

            ajax: {
              type:'POST',
              url: BASE_URL+"admin/country/search_country",
              dataType: 'json',
              delay: 250,

                processResults: function (data) {
                    return {
                        results: data
                    };
                },
                cache: true
            }
        });
    
     
    $("#txtFromDate").datepicker({
        numberOfMonths: 2,
        onSelect: function(selected) {
            $("#txtToDate").datepicker("option","minDate", selected)
        }
    });
    
    $("#txtToDate").datepicker({ 
        numberOfMonths: 2,
        onSelect: function(selected) {
            $("#txtFromDate").datepicker("option","maxDate", selected)
        }
    }); 
    
    $('#ddDateFilter').on('change',function (){
        var date_range = $('#ddDateFilter').val();
        if(date_range == "filter_5"){
            $("#date_select").show();
        }else{
            $("#date_select").hide();
        }
      
    });

        
    
    
    $("#show_table").on('click',function (){
        $(".table_revenue").show();
        $(".chart_revenue").hide();
        var selecttype = $('input[name=radio-choice]:checked').length
        var date_range = $('#ddDateFilter').length
        var dateFilterVal = $('#ddDateFilter').val();
         
        if(selecttype > 0 && dateFilterVal != ''){
           
             if (dateFilterVal == "filter_5"){

                var start_date =  $("#txtFromDate").val();
                var end_date =  $("#txtToDate").val();
                if (start_date == "" && end_date == ""){
                    
                    $("#date_msg").html("Please select one date.");
                    $("#date_msg").css('color', 'Red');
                }
                else{
                    $("#date_msg").css('display', 'none');
                    $("#table_order").show();
                    order_list();

                }
             }
            else{
                    $("#table_order").show();
                    order_list();
            }
        }
        else if(selecttype > 0){
            $("#table_order").show();
            order_list();
            
        }
    });
    
    $(".table_revenue").show();
    order_list();
    
    function  order_list(){
        
        
        var selectedDateValue =  $('#ddDateFilter').val();
        var selectedtype =  $('input[name=radio-choice]:checked').val();
        var start_date =  $("#txtFromDate").val();
        var end_date =  $("#txtToDate").val();
        var country = $("#country_name option:selected" ).val();
        var category = $("#category_select option:selected" ).val();
        var product_id = $("#product_name option:selected" ).val();
        
        $('#table_order').DataTable({
            paging: true,
            pageLength: 10,
            bDestroy: true,
            responsive: true,
            bFilter: false,
            processing: true,
            serverSide: true,
            "order": [[0, "desc"]],
            dataType:"json",
            ajax: {
                url: BASE_URL+"admin/revenue/order_detail_list",
                type: 'POST',
                data: {selectedDateValue: selectedDateValue,
                    start_date:start_date,
                    end_date:end_date,
                    selectedtype:selectedtype,
                    country:country,
                    category:category,
                    product_id:product_id},
            },
            columns: [
//                { data: 'id'},
                {data: 'created_on'},
                {data: 'total_price'},
//                {data: 'created_on'},
//                {data: 'amount'},
            ],
        });

    }
       
    
    product_list();
    country_list();
    country_list_settings();
//    var base_url= $("#base_url").val();
//		$("#admin_sign_up").click(function(){
//                    var frm_data=$("#admin_form").serialize();
//                        var base_url= $("#base_url").val();
//                        var url=base_url+"admin/login/login";
//			$.ajax({
//				url:BASE_URL+"admin/login/login",
//				method:"POST",
//				data:frm_data,
//				success:function(data)
//				{
//					if(data==0)
//					{
//						window.location.href= BASE_URL+"admin/revenue";
//					}
//					else
//					{
//						$(".geomain-sign-in-err-wrapper").css('display','block');
//						 $(".geomain-sign-in-err-wrapper").html('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><div class="geo_signin_err_list"></div></div>');
//						 $(".geo_signin_err_list").html(data);
//					}
//				},	
//				error:function()
//				{
//
//				}
//			});
//                });
                
                
                
                
       $("#frm_product").bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            excluded: ':disabled',
            fields: {
                title: {
                    validators: {
                        notEmpty: {
                            message: 'Title field is required'
                        }
                    }
                },
                description: {
                    validators: {
                        notEmpty: {
                            message: 'Description field is required'
                        }
                    }
                },
                price: {
                    validators: {
                        numeric: {
                            message: 'Please enter number'
                        },
                        notEmpty: {
                            message: 'Price field is required'
                        }
                    }
                },
                discount: {
                    validators: {
                        numeric: {
                            message: 'Please enter number'
                        },
                        notEmpty: {
                            message: 'Discount field is required'
                        }
                    }
                },
                product_code: {
                    validators: {
                        notEmpty: {
                            message: 'Product Code field is required'
                        }
                    }
                },
                product_dropdown_status: {
                    validators: {
                        notEmpty: {
                            message: 'Status field is required'
                        }
                    }
                },
            },
        })
                .on('success.form.bv', function (e) {
                        var frm_data=$("#frm_product").serialize();
//                        var base_url= $("#base_url").val();
                        var url=BASE_URL+"admin/product/save_product";
			$.ajax({
				url: url,
				method:"POST",
				data:frm_data,
				success:function(data) {
                                    var data = $.parseJSON(data);

                                    if (data.status == 1) {
                                        window.location.href = BASE_URL+"admin/product";
                                    }
				},	
			});
                });
   
   $('body').on('click', '.btnDelete_product', function () {
            if (confirm("Are you sure for delete?")) {
                var id = $(this).data('id');
                $.ajax({
                        url: BASE_URL+"admin/product/delete_product",
                        method:"POST",
                        data:{id:id},
                        success:function(data) {
                            var data = $.parseJSON(data);

                            if (data.status == 1) {
                                product_list();
                            }
                        },	
                });
            }
            else{
                 return false;
            }
   });
   
   $("#sub_country").on('click',function(){
       
       var id = $("#country_select").val();
       var tax = $("#tax_rate").val();

       $.ajax({
                url: BASE_URL+"admin/country/update_country",
                type: 'POST',
                data: {id:id,tax:tax},
                datatype: 'json',
                success: function (result) {
                    var data = $.parseJSON(result);

                    if (data.status == 1) {
                        $('#frm_country')[0].reset();
                        country_list_settings();
                    }

                }
            });
   });
    
    $('body').on('click', '.btnEdit_settings', function () {
         var id = $(this).data('id');
         
            $.ajax({
                url: BASE_URL+"admin/country/edit_country",
                type: 'POST',
                data: {id:id},
                datatype: 'json',
                success: function (result) {
                    var data = $.parseJSON(result);

                    if (data.status == 1) {
                        var name = $("#country_select").val(data.content.id);
                        name.attr("selected", "selected");
                        $("#tax_rate").val(data.content.tax_rate);
                        
                    }

                }
            });
     });
     
//     $('body').on('click', '.btnDelete_country', function () {
//         
//          var id = $(this).data('id');
//          
//           $.ajax({
//                url: "country/delete_country",
//                type: 'POST',
//                data: {id:id},
//                datatype: 'json',
//                success: function (result) {
//                    var data = $.parseJSON(result);
//
//                    if (data.status == 1) {
//                        alert(data);
////                        var name = $("#country_name").val(data.content.id);
////                        name.attr("selected", "selected");
////                        $("#tax_rate").val(data.content.tax_rate);
//                        
//                    }
//
//                }
//            });
//          
//         
//     });
   
   
   function  product_list(){
    
        $('#table_product').DataTable({
            paging: true,
            pageLength: 10,
            bDestroy: true,
            responsive: true,
            processing: true,
            serverSide: true,
            "order": [[0, "desc"]],
            dataType:"json",
            ajax: {
                url: BASE_URL+"admin/product/product_list",
                type: 'POST',
            },
            columns: [
//                { data: 'id'},
                {data: 'title'},
                {data: 'description'},
                {data: 'price'},
                {data: 'discount'},
                {data: 'product_code'},
                {data: 'status'},
                {data: 'action', orderable: false, searchable: false},
            ],
        });

}

    function  country_list(){
    
        $('#table_country').DataTable({
            paging: true,
            pageLength: 10,
            bDestroy: true,
            responsive: true,
            processing: true,
            serverSide: true,
            "order": [[0, "desc"]],
            dataType:"json",
            ajax: {
                url: BASE_URL+"admin/country/country_list",
                type: 'POST',
            },
            columns: [
//                { data: 'id'},
                {data: 'name'},
                {data: 'iso3'},
                {data: 'phonecode'},
                {data: 'currency_symbol'},
                {data: 'currency_code'},
                {data: 'tax_rate'},
                {data: 'currency_rate'},
                {data: 'orders'},
                {data: 'action', orderable: false, searchable: false},
            ],
        });

}
    
    function  country_list_settings(){
    
        $('#table_settings').DataTable({
            paging: true,
            pageLength: 10,
            bDestroy: true,
            responsive: true,
            processing: true,
            serverSide: true,
            "order": [[0, "desc"]],
            dataType:"json",
            ajax: {
                url: BASE_URL+"admin/settings/country_list",
                type: 'POST',
            },
            columns: [
//                { data: 'id'},
                {data: 'name'},
                {data: 'iso3'},
                {data: 'tax_rate'},
                {data: 'orders'},
                {data: 'action', orderable: false, searchable: false},
            ],
        });

}

//    $('body').on('click', '.btnEdit_product', function () {
//        var id = $(this).data('id');
//        
//        $.ajax({
//                url: BASE_URL+"admin/product/edit_product",
//                type: 'POST',
//                data: {id:id},
//                datatype: 'json',
//                success: function (result) {
//                    var data = $.parseJSON(result);
//
//                    if (data.status == 1) {
//                        alert(data.content);
//                        
//                        $("#id").val(data.content.id);
//                        $("#title").val(data.content.title);
//                        $("#description").val(data.content.description);
//                        $("#price").val(data.content.price);
//                        $("#discount").val(data.content.discount);
//                        
//                    }
//
//                }
//        });
//    });
    
    
    
    $("#start_date").datepicker({
        numberOfMonths: 2,
        onSelect: function (selected) {
              var dt = new Date(selected);
              dt.setDate(dt.getDate() + 1);
            $("#end_date").datepicker("option", "minDate", dt);
            } 
    });
    
    $("#end_date").datepicker({ 
        numberOfMonths: 2,
        onSelect: function (selected) {
            var dt1 = new Date(selected);
            dt1.setDate(dt1.getDate() - 1);
            $("#start_date").datepicker("option", "maxDate", dt1);
          }
    });

});


function load_chart(data_array, title){
        //    console.log(data_array);
            Highcharts.chart('chart_container', {
            chart: {
                type: 'column'
            },
            title: {
                text: title
            },
            exporting: { enabled: false },
            credits: {
              enabled: false
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Price'
                }
            },
            legend: {
                enabled: false
            },
//            tooltip: {
//                pointFormat: 'Price'
//            },
            series:[{
                name: 'Price',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    $.each(data_array,function(key,value){
                        data.push([
                            value.name,
                            parseFloat(value.y) 
                        ]);
                    })
                    return data;
                }()),
            }]
        });
}

function  faq_list(){
    
        $('#faq_list').DataTable({
            paging: true,
            pageLength: 5,
            bDestroy: true,
            responsive: true,
            processing: true,
            serverSide: true,
            "order": [[0, "desc"]],
            dataType:"json",
            ajax: {
                url: BASE_URL+"admin/faq/faq_list",
                type: 'POST',
            },
            columns: [
                { data: 'id'},
                {data: 'category_name'},
                {data: 'question'},
                {data: 'answer'},
//                {data: 'email'},
////                {data: 'password'},
//                {data: 'status'},
                {data: 'action', orderable: false, searchable: false},
            ],
        });

}