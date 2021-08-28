<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Model_wishlist extends CI_Model {

	public function __construct()
	{
		parent::__construct();
	}
	
	function getWishlist($uid='')
	{
		$sql	= "SELECT wishlist_id, product_name, product_price, product_image, product_rating, product_review, product_sale, product_stock, product_location FROM tbl_wishlist, tbl_product WHERE tbl_wishlist.product_id=tbl_product.product_id AND user_id=? ORDER BY wishlist_id DESC";
		$query	= $this->db->query($sql, array($uid));
		$rs		= $query->result_array();
		
		return $rs;
	}
}