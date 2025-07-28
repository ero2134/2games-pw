									$.post('/result_bonus.php?reg_bonus=true',{'id':id___,'users':users,'hash':hash}, function (data) {
										if (data.status && data.is_deposit) {
											$('#bonus-img').attr('src', data.image);
											$('#bonus-deposit-sum').html(data.deposit);
											console.log($('.min'));
											$('.min').html(data.deposit);
											$('.deposit-campaign-id').val(data.campaign_id);
											$('#deposit-for-bonus-modal .aside__promo-table .table__body').html('');
											$('#deposit-for-bonus-modal input[name=bonus_id]').val(id);
											$.each(data.winners, function ($key, $item) {
												var $row = "<tr class='table__row'><td class='table__cell'>" + ($key + 1) + "</td><td class='table__cell'>" + $item.login + "</td><td class='table__cell'>" + Math.round($item.win) + "</td></tr>";
												$('#deposit-for-bonus-modal .aside__promo-table .table__body').append($row);
											});
											$('#cabinet-modal').hide();
											$('#deposit-for-bonus-modal').show();
											$('html').addClass('modal_open');
										} 
										if(data.error){
											
												alersing_stup(data.error);
										}
									}, 'json');