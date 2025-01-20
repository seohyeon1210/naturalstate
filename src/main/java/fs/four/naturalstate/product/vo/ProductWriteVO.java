package fs.four.naturalstate.product.vo;

import java.util.Date;

public class ProductWriteVO {

    private long product_number;
    private String storeid;
    private String product_category;
    private String product_title;
    private String product_thumbnail_name;
    private String product_thumbnail_path;
    private String product_detail_name;
    private String product_detail_path;
    private long product_price;
    private String product_content;
    private Date product_created_date;
    private int product_report_count;
    private String product_updated_id;
    private Date product_updated_date;

    public ProductWriteVO() {

    }

    public long getProduct_number() {
        return product_number;
    }

    public void setProduct_number(long product_number) {
        this.product_number = product_number;
    }

    public String getStoreid() {
        return storeid;
    }

    public void setStoreid(String storeid) {
        this.storeid = storeid;
    }

    public String getProduct_category() {
        return product_category;
    }

    public void setProduct_category(String product_category) {
        this.product_category = product_category;
    }

    public String getProduct_title() {
        return product_title;
    }

    public void setProduct_title(String product_title) {
        this.product_title = product_title;
    }

    public String getProduct_thumbnail_name() {
        return product_thumbnail_name;
    }

    public void setProduct_thumbnail_name(String product_thumbnail_name) {
        this.product_thumbnail_name = product_thumbnail_name;
    }

    public String getProduct_thumbnail_path() {
        return product_thumbnail_path;
    }

    public void setProduct_thumbnail_path(String product_thumbnail_path) {
        this.product_thumbnail_path = product_thumbnail_path;
    }

    public String getProduct_detail_name() {
        return product_detail_name;
    }

    public void setProduct_detail_name(String product_detail_name) {
        this.product_detail_name = product_detail_name;
    }

    public String getProduct_detail_path() {
        return product_detail_path;
    }

    public void setProduct_detail_path(String product_detail_path) {
        this.product_detail_path = product_detail_path;
    }

    public long getProduct_price() {
        return product_price;
    }

    public void setProduct_price(long product_price) {
        this.product_price = product_price;
    }

    public String getProduct_content() {
        return product_content;
    }

    public void setProduct_content(String product_content) {
        this.product_content = product_content;
    }

    public Date getProduct_created_date() {
        return product_created_date;
    }

    public void setProduct_created_date(Date product_created_date) {
        this.product_created_date = product_created_date;
    }

    public int getProduct_report_count() {
        return product_report_count;
    }

    public void setProduct_report_count(int product_report_count) {
        this.product_report_count = product_report_count;
    }

    public String getProduct_updated_id() {
        return product_updated_id;
    }

    public void setProduct_updated_id(String product_updated_id) {
        this.product_updated_id = product_updated_id;
    }

    public Date getProduct_updated_date() {
        return product_updated_date;
    }

    public void setProduct_updated_date(Date product_updated_date) {
        this.product_updated_date = product_updated_date;
    }
}
