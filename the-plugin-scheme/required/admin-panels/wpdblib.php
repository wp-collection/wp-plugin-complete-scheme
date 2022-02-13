<?php


    /*
    // Methods library
    // --------------------------
    // space used for DB methods
    // and other little functions
    */


    function set_table_name($tabname) {

        // Get WP DB and make a string with a database
        // prefix, that is the complete  table name,
        // so your tab target.

        global $wpdb;
        return $wpdb->prefix.''.$tabname;

    }

    function get_tabs_list () {

        // Get from WP DB a list of tables -> name

        global $wpdb;
        $array = $wpdb->get_results("SHOW TABLES LIKE '%'");
        foreach($array as $obj => $table) foreach($table as $name) $tabslist[] = $name;
        return $tabslist;

    }

    function get_all_values_in_column ($tabname,$valname) {

        // in WP DB target a $tabname (ex wp_mytabname) and 
        // make a list of value inside a culumn whit $valname

        global $wpdb;
        $array = $wpdb->get_results("SELECT * FROM $tabname");
        foreach($array as $obj) $column[] = $obj->$valname;
        return $column;

    }

    function get_value_in_row ($tabname,$valname,$row) {

        // in WP DB get the table $tabname (ex wp_mytabname) and
        // get the $valname in specific id, the $Row (_id=1,2,3)
        // note: _id it's a field, you need to create it in generate_tab()! 

        global $wpdb;
        return $wpdb->get_var( "SELECT `$valname` FROM `$tabname` WHERE _id=$row");

    }

    function generate_tab ($tabname) {

        // generate a table inside WP DB.
        // note: _id, _status, _bool is simple flags.
        // it's all customizable but _id is important for 
        // other func of this library!
        // Order it's not really important.


        global $wpdb; 

        $charset_collate = $wpdb->get_charset_collate();
        require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
    
        $sql = "CREATE TABLE $tabname (
                    _id INTEGER NOT NULL AUTO_INCREMENT,
                    _status TEXT NOT NULL,
                    _bool TEXT NOT NULL,
                    _radio TEXT NOT NULL,
                    _select TEXT NOT NULL,
                    _string TEXT NOT NULL,
                    PRIMARY KEY (_id)
                ) $charset_collate;";

        dbDelta( $sql );

    }

    function drop_tab ($tabname) {

        // Remove a table ($tabname, ex wp_mytabname) in WP DB

        global $wpdb; 
        $result = $wpdb->query( "DROP TABLE IF EXISTS $tabname" );    
        if( ! in_array(''.$tabname,get_tabs_list()) ) { return true; } else { return false; }

    }

    function update_data($tabname,$arraydata,$row) {

        // Update a data in WP DB:
        // find a table ($tabname ex wp_mytabname)
        // if the "_id" == or $row (1,2,3..)
        // set new array data (equal to colum of Db!)

        global $wpdb;
        return $wpdb->update( $tabname, $arraydata, ['_id' => $row] );

    }

    function init_data($tabname,$arraydata) {

        // Update a data in WP DB:
        // find a table ($tabname ex wp_mytabname)
        // set new array data (equal to colum of Db!)

        global $wpdb;
        return $wpdb->insert( $tabname, $arraydata );

    }

    function wpdb_log () {

        // it's a simple way to make a little log
        // from DB if error isn't empty

        global $wpdb;

        if( $wpdb->last_error !== '' ) {

            $message   = htmlspecialchars( $wpdb->last_result, ENT_QUOTES );
            $fromquery = htmlspecialchars( $wpdb->last_query, ENT_QUOTES );

            $log = '
                <div class="output-error">
                    <p><strong>WordPress database error:</strong> '.$message.'<br />
                    <code>'.$fromquery.'</code></p>
                </div>
            ';

            return $log;

        }

    }

?>
