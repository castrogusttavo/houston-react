import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MicrosoftAdminIcon({
  iconName = 'microsoft-admin',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
