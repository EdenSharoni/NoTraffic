class Zone:
    zone_id: int
    name: str
    points: list

    def __init__(self, zone_id: int, name: str, points: list):
        self.zone_id = zone_id
        self.name = name
        self.points = points

    def to_dict(self):
        return {
            "id": self.zone_id,
            "name": self.name,
            "points": self.points
        }