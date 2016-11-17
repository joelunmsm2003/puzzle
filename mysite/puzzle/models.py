# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Remove `managed = True` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
#
# Also note: You'll have to insert the output of 'django-admin.py sqlcustom [app_label]'
# into your database.
from __future__ import unicode_literals

from django.db import models


class AuthGroup(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    name = models.CharField(unique=True, max_length=80)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    group = models.ForeignKey(AuthGroup)
    permission = models.ForeignKey('AuthPermission')

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'


class AuthPermission(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType')
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'


class AuthUser(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=30)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    user = models.ForeignKey(AuthUser)
    group = models.ForeignKey(AuthGroup)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'


class AuthUserUserPermissions(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    user = models.ForeignKey(AuthUser)
    permission = models.ForeignKey(AuthPermission)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'


class Component(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    name = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'component'


class Control(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    ip = models.CharField(max_length=100, blank=True)
    date = models.DateTimeField(blank=True, null=True)
    nclicks = models.IntegerField(blank=True, null=True)
    data = models.CharField(max_length=1000, blank=True)

    class Meta:
        managed = True
        db_table = 'control'


class CorsheadersCorsmodel(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    cors = models.CharField(max_length=255)

    class Meta:
        managed = True
        db_table = 'corsheaders_corsmodel'


class DjangoAdminLog(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.IntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', blank=True, null=True)
    user = models.ForeignKey(AuthUser)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'


class DjangoMigrations(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Fan(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    user = models.ForeignKey(AuthUser, db_column='user', blank=True, null=True)
    ip = models.CharField(max_length=100, blank=True)

    class Meta:
        managed = True
        db_table = 'fan'


class Fancomponent(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    fan = models.ForeignKey(Fan, db_column='fan', blank=True, null=True)
    component = models.ForeignKey(Component, db_column='component', blank=True, null=True)
    nclicks = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'fancomponent'


class Ip(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    name = models.CharField(max_length=100, blank=True)
    place = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'ip'


class Puzzle(models.Model):
    src = models.CharField(max_length=200, blank=True)
    rows = models.IntegerField(blank=True, null=True)
    cols = models.IntegerField(blank=True, null=True)
    id = models.IntegerField(primary_key=True)  # AutoField?
    name = models.CharField(max_length=100, blank=True)
    nclicks = models.IntegerField(blank=True, null=True)
    ip = models.CharField(max_length=100, blank=True)

    class Meta:
        managed = True
        db_table = 'puzzle'


class Puzzlefan(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    puzzle = models.ForeignKey(Puzzle, db_column='puzzle', blank=True, null=True)
    fan = models.ForeignKey(Fan, db_column='fan', blank=True, null=True)
    nclicks = models.IntegerField(blank=True, null=True)
    reaction = models.ForeignKey('Reaction', db_column='reaction', blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'puzzlefan'


class Reaction(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    name = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'reaction'
