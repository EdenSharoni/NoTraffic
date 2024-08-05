from flask import Flask, request, jsonify
from zone.bl.zone_bl import ZoneBL
import json

from flask import Blueprint

zone_bl = ZoneBL()

zone_controller = Blueprint('zone_controller', __name__)

# Get all zones
@zone_controller.route('/zones', methods=["GET"])
def get_all_zones():
    """"get all zones"""
    return zone_bl.get_all_zones()


# Creating new zone
@zone_controller.route('/zone', methods=["POST"])
def creating_new_zone():
    """"creating new zone"""
    data = json.loads(request.data)
    name = data['name']
    points = data['points']
    zone = zone_bl.create_new_zone(name=name, points=points)
    return zone


# Delete zone
@zone_controller.route('/zone/<zone_id>', methods=["DELETE"])
def delete_zone(zone_id: int):
    """"deleting zones"""
    return jsonify(zone_bl.delete_zone(zone_id=int(zone_id)))