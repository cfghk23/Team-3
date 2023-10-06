import os
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker

db_path = "sqlite:///" + os.path.join(os.path.dirname(__file__), "sqlite3.db")

engine = create_engine(db_path)
Session = sessionmaker(bind=engine)
session = Session()
Base = declarative_base()

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    username = Column(String(100), nullable=False)
    user_id = Column(String(100), nullable=False)
    password = Column(String(100), nullable=False)

    def __init__(self, username, user_id, password):
        self.username = username
        self.user_id = user_id
        self.password = password
