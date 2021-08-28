<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Model_account extends CI_Model {

	public function __construct()
	{
		parent::__construct();
	}
	
	function getAddress($uid='')
	{
		$sql	= "SELECT address_id as id, title, recipient_name, phone_number, address_line1, address_line2, state, postal_code, default_address FROM tbl_address WHERE user_id=? ORDER BY address_id ASC";
		$query	= $this->db->query($sql, array($uid));
		$rs		= $query->result_array();
		
		return $rs;
	}

	function getLastSeen($uid='', $skip, $limit)
	{ 
		$sql	= "SELECT last_seen_id, product_name, product_price, product_image, product_rating, product_review, product_sale, product_location FROM tbl_product, tbl_last_seen WHERE tbl_product.product_id=tbl_last_seen.product_id AND user_id=? ORDER BY last_seen_id DESC LIMIT ?, ?";
		$query	= $this->db->query($sql, array($uid, $skip, $limit));
		$rs		= $query->result_array();
		
		return $rs;
	}

	function getOrderList($uid='', $status, $skip, $limit)
	{
		$where = '';
		if(isset($status) && !empty($status)){
			$where = "AND order_status = '$status'";
		}

		$sql	= "SELECT tbl_order.order_id, invoice_number, order_status, total_price, order_date, product_name, product_image FROM tbl_product, tbl_order, tbl_order_detail WHERE tbl_order.order_id=tbl_order_detail.order_id AND tbl_product.product_id=tbl_order_detail.product_id AND user_id=? $where GROUP BY order_id ORDER BY order_id ASC LIMIT ?, ?";
		$query	= $this->db->query($sql, array($uid, $skip, $limit));
		$rs		= $query->result_array();
		
		return $rs;
	}
}