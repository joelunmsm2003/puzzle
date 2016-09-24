# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desidered behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from __future__ import unicode_literals

from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=80)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
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
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class Component(models.Model):
    name = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'component'


class Control(models.Model):
    ip = models.CharField(max_length=100, blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    nclicks = models.IntegerField(blank=True, null=True)
    data = models.CharField(max_length=1000, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'control'


class CorsheadersCorsmodel(models.Model):
    cors = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'corsheaders_corsmodel'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.SmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
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
    user = models.ForeignKey(AuthUser, models.DO_NOTHING, db_column='user', blank=True, null=True)
    ip = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fan'


class Fancomponent(models.Model):
    fan = models.ForeignKey(Fan, models.DO_NOTHING, db_column='fan', blank=True, null=True)
    component = models.ForeignKey(Component, models.DO_NOTHING, db_column='component', blank=True, null=True)
    nclicks = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fancomponent'


class Ip(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    place = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'ip'


class Puzzle(models.Model):
    src = models.CharField(max_length=200, blank=True, null=True)
    rows = models.IntegerField(blank=True, null=True)
    cols = models.IntegerField(blank=True, null=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    nclicks = models.IntegerField(blank=True, null=True)
    ip = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'puzzle'


class Puzzlefan(models.Model):
    puzzle = models.ForeignKey(Puzzle, models.DO_NOTHING, db_column='puzzle', blank=True, null=True)
    fan = models.ForeignKey(Fan, models.DO_NOTHING, db_column='fan', blank=True, null=True)
    nclicks = models.IntegerField(blank=True, null=True)
    reaction = models.ForeignKey('Reaction', models.DO_NOTHING, db_column='reaction', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'puzzlefan'


class Reaction(models.Model):
    name = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'reaction'
