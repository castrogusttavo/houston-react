import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserIdVerificationIcon({
  iconName = 'user-id-verification',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
