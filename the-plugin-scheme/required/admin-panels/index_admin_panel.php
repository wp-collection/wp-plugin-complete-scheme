<?php

    /*
    // SAVE DATA FRON PLUGIN PAGE 
    // --------------------------
    // content page of plugin
    // the logich of this page is simple..
    // 1. set options via form, avery opt is an exemple of bool, radio, ecc
    // 2. save in db the form data... used "methods.php"
    // 3. refresh the page and read ex contents or prepare for new start.
    */


    //: load methods of page

    require 'wpdblib.php';


    //: set the table target in WP DB

    $tab = set_table_name('plugin_test');

    //: get the value from WP DB
    //: (in this case, all value, is a demo of value types)

    $_saved_bool   = get_value_in_row($tab,'_bool',1);
    $_saved_radio  = get_value_in_row($tab,'_radio',1);
    $_saved_select = get_value_in_row($tab,'_select',1);
    $_saved_string = get_value_in_row($tab,'_string',1);

    //: write the page/form for all options...

?>

<div class="wrap-box">

    <h1>Hello World!</h1>
    <h1>Hello World!</h1>

    <p>
        This is a simple scheme of "how to build a wordpress plugin". Find this, in codes, in the same name folder.
        <br><br>
        The official repo: <a target="_blank" href="https://github.com/bertz-tech/wp-plugin-scheme">github.com 🠖 bertz-tech 🠖 wp-plugin-scheme</a>
        <br>
        Unofficial youtube tutorials: <a target="_blank" href="https://www.youtube.com/watch?v=n5Nqao1KbPo" >youtube 🠖 n5Nqao1KbPo</a> and <a target="_blank" href="https://www.youtube.com/watch?v=hbJiwm5YL5Q">youtube 🠖 hbJiwm5YL5Q</a></p>

    <hr>

    <form method="post">

        <label for="test_select"> This is a select </label>
        <input type="hidden" name="test_select" value="<?echo $_saved_select;?>">
        <select>
            <option value="Javascript" <?php if($_saved_select=="Javascript") { echo 'selected'; } ?>>Javascript</option>
            <option value="Php" <?php if($_saved_select=="Php") { echo 'selected'; } ?>>Php</option>
            <option value="MongoDb" <?php if($_saved_select=="MongoDb") { echo 'selected'; } ?>>MongoDb</option>
            <option value="VSCode" <?php if($_saved_select=="VSCode") { echo 'selected'; } ?>>VSCode</option>
        </select>

        <hr>

        <label for="test_string"> A simple string: </label>
        <input type="text" name="test_string" <?php if(!empty($_saved_string)){ echo 'value="'.$_saved_string.'"'; } ?> placeholder="write a string...">

        <hr>

        <label for="test_bool_01"> I target a option </label>
        <input type="checkbox" name="test_bool" <?php if($_saved_bool=='1'){ echo 'value="1" checked="true"'; }?>">

        <hr>

        <label for="test_radio"> I target a option [A]/B </label>
        <input type="radio" name="test_radio" value="A" <?php if($_saved_radio=='A'){ echo 'checked="true"'; }?>>
        <br>
        <label for="test_radio"> I target a option A/[B] </label>
        <input type="radio" name="test_radio" value="B" <?php if($_saved_radio=='B'){ echo 'checked="true"'; }?>>

        <hr>

        <input type="submit" name="save_data" value="Save data now">

        <input type="submit" name="clean_data" value="Reset all data">

        <?php

            //: if save is pressed
            if( isset($_POST['save_data']) ) {

                echo '<hr><p>System : Data processing...</p>';

                //: if not exist a db for this data, make it!
                if ( ! in_array(''.$tab,get_tabs_list()) ){ generate_tab($tab); }

                //: now get all ID value in table DB
                $idlist = get_all_values_in_column($tab,'_id',1);

                //: ID exist? is an update of that ID
                if( in_array(1,$idlist) ) {


                    echo '<p>ID exist -> Data updating...</p>';

                    $data = [

                        '_id'       => 1, // or other id
                        '_status'   => '0',
                        '_bool'     => isset($_POST['test_bool'])?'1':'0',
                        '_radio'    => $_POST['test_radio'],
                        '_select'   => $_POST['test_select'],
                        '_string'   => $_POST['test_string']

                    ];

                    $update = update_data( $tab, $data, 1);


                }

                //: ID NOT exist? make new data
                else {


                    echo '<p>No row -> New data writing...</p>';

                    $data = [

                        '_id'       => null,  // or other id for make that id
                        '_status'   => '0',
                        '_bool'     => isset($_POST['test_bool'])?'1':'0',
                        '_radio'    => $_POST['test_radio'],
                        '_select'   => $_POST['test_select'],
                        '_string'   => $_POST['test_string']

                    ];

                    $writer = init_data( $tab, $data );

                }


                //: DB result...
                if($update>=0) {

                    echo '<p class="output-success"> result: ... ✨ Data is updated. </p>';
                    header("Refresh:0");
                    
                } elseif($writer>0) {

                    echo ' <p class="output-success"> result: ... ✨ New data is written. </p>';
                    header("Refresh:0");
    
                } else {

                    echo '<p class="output-error"> result: ... 💀 Cannot save data. </p>';
                    wpdb_log();

                }

            }

            //: if DB ROW exist and press clean... delete table.
            else if( isset($_POST['clean_data']) && in_array(''.$tab,get_tabs_list()) ) {


                echo "<p><b>CLEAN DATA INITITALIZED...</b></p>";

                $dropping = drop_tab($tab);

                if(!$dropping)  {echo '<p class="output-error">result:  💀 IMPOSSIBLE TO CLEAN DATA</p>'; wpdb_log(); header("Refresh:8");}
                else            {echo '<p class="output-success">result: ✨ DATABASE CLEANED!</p>'; header("Refresh:0");}
        
            }

        ?>

    </form>
</div>

<script>
    //simple method for refresh value of form
    document.addEventListener('DOMContentLoaded', ()=>{
        let selects = document.getElementsByTagName('select');
        for (let thisselect of selects) thisselect.onclick = ev => thisselect.previousElementSibling.setAttribute('value', ev.target[ev.target.selectedIndex].text);
    }, false);
</script>

<style>
    .wrap-box{
        border:1px dotted gray;
        border-radius:10px;
        margin:30px 30px 30px 10px;
        padding:30px;
    }
    .wrap-box hr{
        border-top:1px dotted gray;
        margin:30px 0;
    }
    .wrap-box input[name=clean_data]
    {
        float:right;
        color:orange;
    }
    .wrap-box .output-success,
    .wrap-box .output-error
    {
        border:1px dotted;
        border-radius:10px;
        padding:5px;
        display:inline-block;

    }
    .wrap-box .output-success
    {
        border-color:green;
    }
    .wrap-box .output-error
    {
        border-color:red;
    }
</style>

<?php
//: EXTRAS:
//:
//: tecnically you can use the common submit of wp:
//: submit_button( 'Save settings' );  and  add_acction('save_post','function_name_without_the_isset')
//: in this case we want to be all customizable, so...
//: do_settings_sections('the-scheme-test');
?>
