var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Clean_Parcels_landuse_1 = new ol.format.GeoJSON();
var features_Clean_Parcels_landuse_1 = format_Clean_Parcels_landuse_1.readFeatures(json_Clean_Parcels_landuse_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clean_Parcels_landuse_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clean_Parcels_landuse_1.addFeatures(features_Clean_Parcels_landuse_1);
var lyr_Clean_Parcels_landuse_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Clean_Parcels_landuse_1, 
                style: style_Clean_Parcels_landuse_1,
                interactive: true,
    title: 'Clean_Parcels_landuse<br />\
    <img src="styles/legend/Clean_Parcels_landuse_1_0.png" /> Agriculture<br />\
    <img src="styles/legend/Clean_Parcels_landuse_1_1.png" /> Associated Commercial Land<br />\
    <img src="styles/legend/Clean_Parcels_landuse_1_2.png" /> Associated Multi Family <br />\
    <img src="styles/legend/Clean_Parcels_landuse_1_3.png" /> Associated Single Family <br />\
    <img src="styles/legend/Clean_Parcels_landuse_1_4.png" /> Commercial<br />\
    <img src="styles/legend/Clean_Parcels_landuse_1_5.png" /> Government and Institution <br />\
    <img src="styles/legend/Clean_Parcels_landuse_1_6.png" /> Industrial <br />\
    <img src="styles/legend/Clean_Parcels_landuse_1_7.png" /> Multi Family Residential <br />\
    <img src="styles/legend/Clean_Parcels_landuse_1_8.png" /> Parks and Open Space<br />\
    <img src="styles/legend/Clean_Parcels_landuse_1_9.png" /> Parking Lots<br />\
    <img src="styles/legend/Clean_Parcels_landuse_1_10.png" /> Roads and Utilities<br />\
    <img src="styles/legend/Clean_Parcels_landuse_1_11.png" /> Single Family Residential <br />\
    <img src="styles/legend/Clean_Parcels_landuse_1_12.png" /> Vacant<br />\
    <img src="styles/legend/Clean_Parcels_landuse_1_13.png" /> <br />'
        });
var format_Waterways_SSL_2 = new ol.format.GeoJSON();
var features_Waterways_SSL_2 = format_Waterways_SSL_2.readFeatures(json_Waterways_SSL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterways_SSL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterways_SSL_2.addFeatures(features_Waterways_SSL_2);
var lyr_Waterways_SSL_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Waterways_SSL_2, 
                style: style_Waterways_SSL_2,
                interactive: true,
                title: '<img src="styles/legend/Waterways_SSL_2.png" /> Waterways_SSL'
            });

lyr_ESRIGraylight_0.setVisible(true);lyr_Clean_Parcels_landuse_1.setVisible(true);lyr_Waterways_SSL_2.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_Clean_Parcels_landuse_1,lyr_Waterways_SSL_2];
lyr_Clean_Parcels_landuse_1.set('fieldAliases', {'objectid': 'objectid', 'parcel_id': 'parcel_id', 'parcel_add': 'parcel_add', 'parcel_acr': 'parcel_acr', 'land_mkt_v': 'land_mkt_v', 'prop_class': 'prop_class', 'prop_type': 'prop_type', 'wfrc_lutyp': 'wfrc_lutyp', });
lyr_Waterways_SSL_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', 'type': 'type', 'flow': 'flow', 'channel': 'channel', 'fc_ordinan': 'fc_ordinan', 'ordinance_': 'ordinance_', 'ordinanc_1': 'ordinanc_1', 'fc_permit': 'fc_permit', 'permit_id': 'permit_id', 'permit_det': 'permit_det', 'notes': 'notes', 'contact': 'contact', 'watershed_': 'watershed_', 'watershe_1': 'watershe_1', 'watershe_2': 'watershe_2', 'RuleID': 'RuleID', 'reach': 'reach', 'streamorde': 'streamorde', 'precision_': 'precision_', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'Watershed': 'Watershed', 'level_II': 'level_II', 'stability': 'stability', 'refreach': 'refreach', 'flow_regim': 'flow_regim', 'seg_length': 'seg_length', 'municipali': 'municipali', 'asset_id': 'asset_id', 'Shape_Leng': 'Shape_Leng', });
lyr_Clean_Parcels_landuse_1.set('fieldImages', {'objectid': 'TextEdit', 'parcel_id': 'TextEdit', 'parcel_add': 'TextEdit', 'parcel_acr': 'TextEdit', 'land_mkt_v': 'TextEdit', 'prop_class': 'TextEdit', 'prop_type': 'TextEdit', 'wfrc_lutyp': 'TextEdit', });
lyr_Waterways_SSL_2.set('fieldImages', {'OBJECTID': 'Range', 'name': 'TextEdit', 'type': 'TextEdit', 'flow': 'TextEdit', 'channel': 'TextEdit', 'fc_ordinan': 'TextEdit', 'ordinance_': 'Range', 'ordinanc_1': 'TextEdit', 'fc_permit': 'TextEdit', 'permit_id': 'Range', 'permit_det': 'TextEdit', 'notes': 'TextEdit', 'contact': 'TextEdit', 'watershed_': 'Range', 'watershe_1': 'TextEdit', 'watershe_2': 'TextEdit', 'RuleID': 'Range', 'reach': 'TextEdit', 'streamorde': 'Range', 'precision_': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'Watershed': 'TextEdit', 'level_II': 'TextEdit', 'stability': 'TextEdit', 'refreach': 'TextEdit', 'flow_regim': 'TextEdit', 'seg_length': 'TextEdit', 'municipali': 'TextEdit', 'asset_id': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Clean_Parcels_landuse_1.set('fieldLabels', {'objectid': 'inline label', 'parcel_id': 'inline label', 'parcel_add': 'inline label', 'parcel_acr': 'inline label', 'land_mkt_v': 'inline label', 'prop_class': 'inline label', 'prop_type': 'inline label', 'wfrc_lutyp': 'inline label', });
lyr_Waterways_SSL_2.set('fieldLabels', {'OBJECTID': 'no label', 'name': 'no label', 'type': 'no label', 'flow': 'no label', 'channel': 'no label', 'fc_ordinan': 'no label', 'ordinance_': 'no label', 'ordinanc_1': 'no label', 'fc_permit': 'no label', 'permit_id': 'no label', 'permit_det': 'no label', 'notes': 'no label', 'contact': 'no label', 'watershed_': 'no label', 'watershe_1': 'no label', 'watershe_2': 'no label', 'RuleID': 'no label', 'reach': 'no label', 'streamorde': 'no label', 'precision_': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'Watershed': 'no label', 'level_II': 'no label', 'stability': 'no label', 'refreach': 'no label', 'flow_regim': 'no label', 'seg_length': 'no label', 'municipali': 'no label', 'asset_id': 'no label', 'Shape_Leng': 'no label', });
lyr_Waterways_SSL_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});