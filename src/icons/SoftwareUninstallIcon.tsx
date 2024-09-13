import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SoftwareUninstallIcon({
  iconName = 'software-uninstall',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
