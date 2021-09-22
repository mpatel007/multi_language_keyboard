$(document).ready(function () {
     var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    

    $("#profile_pic").on('change', function(){
        $('#upload-demo').show();
        $('.profile-pic').hide();
        readURL(this);
    });
   
                $('#country').on('change',function (){
                    var country_code=$(this).find(':selected').data('code'); 
                    $('#contry_code').val('');
                    $('#contry_code').val(country_code);
                  }); 
                  
//                  $('.btn-geomain-update-user-profile').on('click',function(){
//                      
//                      
//                    if($('#country').val()==0){
//                        alert("Please select country");
//                        return false;
//                    }
//                    $(".geo_signup_err_list").empty();
//                    $(".geo-main-error-wrapper").css('display','none');
////                         var file_data = $('#profile_pic').prop('files')[0];   
//                         
////                    var frm_data=$("#geomain_update_profile_frm").serialize();
//                    
//                    var frm_data = new FormData($('#geomain_update_profile_frm')[0]);
//                    
//                    
////                    console.log(frm_data);
////                    return false;
//                    
//                     var base_url= $("#base_url").val();
//                      var url=base_url+"profile/geomain_user_profile_update";
//                      $.ajax({
//				url:url,
//				method:"POST",
//				data:frm_data,
//                                dataType: "json",
//                                contentType: false,
//                                enctype: 'multipart/form-data',
//                                processData: false,
//				success:function(mydata){
//                                    
//					if(mydata.status==1)
//					{
//						 $(".geo-main-error-wrapper").css('display','block');
//						 $(".geo-main-error-wrapper").html('<div class="alert alert-success alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><div class="geo_signup_err_list"></div></div>');
//						 $(".geo_signup_err_list").html(mydata.msg);
//                                                 $('.img-circle').attr('src',base_url+'assets/upload/profile/thumb_small/'+mydata.pic);
//					}
//					else
//					{
//						 $(".geo-main-error-wrapper").css('display','block');
//						 $(".geo-main-error-wrapper").html('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><div class="geo_signup_err_list"></div></div>');
//						 $(".geo_signup_err_list").html(mydata.msg);
//					}
//				},
//				error:function(){
//
//				}
//			})
//                     
//                  });
		$(".geomain-msg-btn-support").click(function(){
			 $(".geo_signup_err_list").empty();
			 $(".geo-main-error-wrapper").css('display','none');
			var frm_data=$("#geomain_support_frm").serialize();
                        var base_url=$("#base_url").val();
                        var url=base_url+"support/geomain_support_send";
			$.ajax({
				url:url,
				method:"POST",
				data:frm_data,
				success:function(mydata){
					console.log(mydata);

					if(mydata==1)
					{
						$("#geomain_support_frm")[0].reset();
						$('#geomain_support').modal('hide');
						$('#geomain_support_message').modal('show');
					}
					else
					{
						 $(".geo-main-error-wrapper").css('display','block');
						 $(".geo-main-error-wrapper").html('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><div class="geo_signup_err_list"></div></div>');
						 $(".geo_signup_err_list").html(mydata);
					}
				},
				error:function(){

				}
			})
			
		});
                $(".btn-geomain-change-password").click(function(){
                    
			 $(".geo_change_password_err_list").empty();
			 $(".geo-main-error-wrapper").css('display','none');
			var frm_data=$("#geomain_change_password_frm").serialize();
                        var base_url= $("#base_url").val();
                        var url=base_url+"changepassword/geomain_change_password";
			$.ajax({
				url:url,
				method:"POST",
				data:frm_data,
				success:function(mydata){
					console.log(mydata);

					if(mydata==1)
					{
						$("#geomain_change_password_frm")[0].reset();
						$('#geomain_change_password').modal('hide');
						$('#geomain_change_password_message').modal('show');
					}
					else
					{
						 $(".geo-main-error-wrapper").css('display','block');
						 $(".geo-main-error-wrapper").html('<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><div class="geo_change_password_err_list"></div></div>');
						 $(".geo_change_password_err_list").html(mydata);
					}
				},
				error:function(){

				}
			})
			
		});
                $('.geomain-msg-btn-payment-btn').click(function (){
                    location.reload();
                    $('#myModal_geomain-payment').modal('toggle');
                });
                
                $('#expiryTable').DataTable({
                            "paging":   true,
                            "searching": false, 
                            "bInfo" : true,
                            "pageLength": 10,
                            "columnDefs": [
                                { orderable: false, targets: -1 }
                             ]
                });
                $('#dashboardTable').DataTable({
                            "paging":   true,
                            "searching": false, 
                            "bInfo" : true,
                            "pageLength": 10,
                            bSortable : true,
                            "columnDefs": [
                                    { "aTargets": [ 0 ], "bSortable": true },
                                    { "aTargets": [ 1 ], "bSortable": true },
                                    { "aTargets": [ 2 ], "bSortable": true },
                                    { "aTargets": [ 3 ], "bSortable": true },
                                    { "aTargets": [ 4 ], "bSortable": true },
                                    { "aTargets": [ 5 ], "bSortable": false }
                             ]
                });
                
});

function changeyear_dd(id){
    var geomain_type = $(".geomain_type_sub_"+id).val();
    var geoname=$("#geoname_"+id).val();
    var base_url= $("#base_url").val();
    if (geomain_type == 1) 
    {
        $("#update_cart_"+id).show();
        $(".geomain_year_sub_"+id).empty();
        $(".geomain_year_sub_"+id).html('<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option>');
        var path_1 = base_url+'/productlist/get_geomain_price_ajax/'+geoname+'/'+geomain_type+'/'+$('.geomain_year_sub_'+id).val();
        check_price(path_1,id)
        
    } 
  if (geomain_type == 2) 
    {
        $("#update_cart_"+id).show();
        $(".geomain_year_sub_"+id).empty();
        $(".geomain_year_sub_"+id).html('<option value="2">2</option><option value="4">4</option><option value="6">6</option><option value="8">8</option><option value="10">10</option>');
        var path_2 = base_url+'/productlist/get_geomain_price_ajax/'+geoname+'/'+geomain_type+'/'+$('.geomain_year_sub_'+id).val();
        check_price(path_2,id)
        
    } 
  if (geomain_type == 3) 
    {
        $("#update_cart_"+id).show();
        $(".geomain_year_sub_"+id).empty();
        $(".geomain_year_sub_"+id).html('<option value="3">3</option><option value="6">6</option><option value="9">9</option>');
        var path_3 = base_url+'/productlist/get_geomain_price_ajax/'+geoname+'/'+geomain_type+'/'+$('.geomain_year_sub_'+id).val();
        check_price(path_3,id)
        
    }
}

function check_price(path,id){
    $.ajax({
      type:"get",
      url:path,
      dataType:"html",
      success:function(data)
      { 
          
        $("#geomain_price_change"+id).val(data);
        var retun=$("#geomain_price_change"+id).val();
        update_domain(id);
       // $(".geomain_price_change").html(data);
      },
      error:function(data) {
          // alert('error');
      }
    });
}

function update_domain(id){
     var geomain_type = $(".geomain_type_sub_"+id).val();
     var geomain_name=$("#geoname_"+id).val();
     var rowid=$("#geoname_"+id).data("row_id");
     var geomain_year=$(".geomain_year_sub_"+id).val();
     var geomain_price=$("#geomain_price_change"+id).val();
     var base_url= $("#base_url").val();
     var path= base_url+'/productlist/update_cart_geomain/';
     $.ajax({
      type:"post",
      url:path,
      data: {id:id,rowid:rowid,geomain_name:geomain_name,geomain_type:geomain_type,geomain_year:geomain_year,geomain_price:geomain_price},
      dataType:"html",
      success:function(data)
      { 
          var result = JSON.parse(data);
          if(result.status == 1){
              window.location.href = window.location.href;
          }
       
       // $(".geomain_price_change").html(data);
      },
      error:function(data) {
          // alert('error');
      }
    });
}


