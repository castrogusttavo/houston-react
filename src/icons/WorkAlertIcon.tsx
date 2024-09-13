import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WorkAlertIcon({
  iconName = 'work-alert',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
