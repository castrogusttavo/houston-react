import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LockSync01Icon({
  iconName = 'lock-sync-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
