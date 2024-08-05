from pandas import DataFrame
import pandas as pd
import os
from zone.dm.zone import Zone

ZONES_CSV_PATH = 'zone/data/zones.csv'

class ZoneBL:
    def __init__(self):
        self.create_zones_csv_file()
    
    def create_zones_csv_file(self):
        if not os.path.exists(ZONES_CSV_PATH):
            headers = ['id', 'name', 'points']
            df = pd.DataFrame(columns=headers)
            df.to_csv(ZONES_CSV_PATH, index=False)

    def create_new_zone(self, name: str, points: list):
        df = pd.read_csv(ZONES_CSV_PATH)
        
        if df.empty:
            next_id = 1
        else:
            next_id = int(df['id'].max() + 1)
        
        new_zone = Zone(zone_id=next_id, name=name, points=points)
        
        df = pd.concat([df,  pd.DataFrame([new_zone.to_dict()])], ignore_index=True)
        
        df.to_csv(ZONES_CSV_PATH, index=False)

        return new_zone.to_dict()

    def delete_zone(self, zone_id: int):
        df = pd.read_csv(ZONES_CSV_PATH)
        
        # Check if the zone_id exists
        if zone_id in df['id'].values:
            # Delete the row
            df = df[df['id'] != zone_id]
            
            df.to_csv(ZONES_CSV_PATH, index=False)

            return f"Zone with ID {zone_id} deleted."
        else:
            return f"No zone found with ID {zone_id}."
    
    def get_all_zones(self) -> list:
        all_zones = []
        
        df = pd.read_csv(ZONES_CSV_PATH)
        
        for _, row in df.iterrows():
            zone = Zone(zone_id=row["id"], name=row['name'], points=eval(row['points']))
            all_zones.append(zone.to_dict())
        
        return all_zones


