import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MeetingRoomIcon({
  iconName = 'meeting-room',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
